<?php

use App\Tag;
use App\User;
use App\Ward;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Support\Collection;

class UsersControllerTest extends TestCase
{
    /**
     * Retorna um birthday fake como recebido do front-end
     *
     * @return string
     */
    public function fakeBirthday()
    {
        return Faker\Factory::create()->dateTimeThisCentury->format('Y-m-d\TH:i:s.uO');
    }

    /**
     * Retorna um array de usuarios fake pelo metodo make().
     *
     * @param int $quantity Default 10.
     * @return Collection
     */
    public function fakeUsers($quantity = 10)
    {
        $users = factory(App\User::class, $quantity)->make();
        if ($quantity == 1) {
            return $users;
        }
        $usersArray = new Collection();
        foreach ($users as $user) {
            $usersArray->push($this->fakeUsersToArray($user));
        }
        return $usersArray;
    }

    /**
     * Converte um usuario fake em um array para os testes
     *
     * @param App\User|Collection $fakeUsers Um unico usuario fake ou uma colecao deles
     * @return array
     */
    public function fakeUsersToArray($fakeUsers)
    {
        if ($fakeUsers instanceof Collection) {
            $usersArray = new Collection;
            foreach ($fakeUsers as $user) {
                $userdata = $user->toArray();
                $userdata['password'] = $user->password;
                $userdata['birthday'] = $this->fakeBirthday();
                $usersArray->push($userdata);
            }
            return $usersArray;
        }
        $userdata = $fakeUsers->toArray();
        $userdata['password'] = $fakeUsers->password;
        $userdata['birthday'] = $this->fakeBirthday();
        return $userdata;
    }

    /**
     * @author Marco Tulio de Avila Santos <marco.santos@aker.com.br>
     */
    public function testListRouteShouldReturnAllUsersInDatabase()
    {
        // Arrange
        $users = User::with('ward.stake', 'tags')->get();
        // Act e Assert
        $this->get('/api/users')->seeJsonEquals($users->toArray());
    }

    /**
     * @author Marco Tulio de Avila Santos <marco.santos@aker.com.br>
     */
    public function testGetUserRouteShouldReturnAUser()
    {
        // Arrange
        $user = User::with('ward.stake', 'tags')->findOrFail(3);
        // Act e Assert
        $this->get('/api/users/3')->seeJsonEquals($user->toArray());
    }

    /**
     * @author Marco Tulio de Avila Santos <marco.santos@aker.com.br>
     */
    public function testInsertUserShouldReturnThePersistedUser()
    {
        // Arrange
        $user = $this->fakeUsersToArray($this->fakeUsers(1));
        // Act
        $this->post('/api/users', $user);
        $user = User::with('ward.stake', 'tags')->get()->last();
        // Assert
        $this->seeJson($user->toArray());
        $this->assertResponseOk();
        $user->delete();
    }

    /**
     * @author Marco Tulio de Avila Santos <marco.santos@aker.com.br>
     */
    public function testInsertUserWithoutPasswordShouldReturnError()
    {
        // Arrange
        $user = [
            'name' => Faker\Factory::create()->name,
        ];
        // Act e Assert
        $response = $this->call('POST', '/api/users', $user);
        $this->assertResponseStatus(400);
        $this->assertEquals($response->content(), 'PASSWORD_REQUIRED');
    }

    /**
     * @author Marco Tulio de Avila Santos <marco.santos@aker.com.br>
     */
    public function testInsertUserWithWardShouldRelateThatWard()
    {
        // Arrange
        $user = $this->fakeUsersToArray($this->fakeUsers(1));
        $wardId = rand(1, 40);
        $user['ward_id'] = $wardId;
        // Act
        $this->post("/api/users", $user);
        $user = User::all()->last();
        // Assert
        $this->assertResponseOk();
        $this->seeJson(['id' => $user->id, 'ward_id' => $wardId]);
        $user->delete();
    }

    /**
     * @author Marco Túlio de Ávila Santos <marcotulio.avila@gmail.com>
     */
    public function testUpdateUserShouldReturnOk()
    {
        // Arrange
        $id = rand(2, 10);
        $newName = Faker\Factory::create()->name;
        $user = User::with('ward.stake')->find($id);
        $user = $this->fakeUsersToArray($user);
        $fakeUser = $this->fakeUsersToArray($this->fakeUsers(1));
        $user = array_merge($user, $fakeUser);
        // Act e Assert
        $this->post("/api/users/{$id}", $user);
        $updatedUser = User::find($id);
        $this->seeJson($updatedUser->toArray());
        $this->seeInDatabase('users', $updatedUser->toArray());
        $this->assertResponseOk();
    }

    /**
     * @author Marco Túlio de Ávila Santos <marcotulio.avila@gmail.com>
     */
    public function testUpdateUserWithWardShouldRelateUserToThatWard()
    {
        // Arrange
        $wardId = rand(1, 40);
        $userId = rand(2, 10);
        $user = User::find($userId);
        $user->ward_id = $wardId;
        $user = $this->fakeUsersToArray($user);
        // Act
        $this->post("/api/users/{$userId}", $user);
        // Assert
        $this->assertResponseOk();
        $user = User::find($userId);
        $this->seeJson(['ward_id' => $wardId]);
    }

    /**
     * @author Marco Túlio de Ávila Santos <marcotulio.avila@gmail.com>
     */
    public function testDestroyAUserShouldReturnOk()
    {
        // Arrange
        $user = factory(App\User::class)->create();
        // Act
        $this->delete('/api/users/' . $user->id);
        // Assert
        $this->assertResponseOk();
    }

    /**
     * @author Marco Túlio de Ávila Santos <marcotulio.avila@gmail.com>
     */
    public function testInsertUserWithTagsShouldSyncTags()
    {
        // Arrange
        $faker = Faker\Provider\Lorem::word();
        $tags = [
            ['id' => rand(1, 10), 'name' => 'tag 1'],
            ['id' => rand(1, 10), 'name' => 'tag 2'],
            ['id' => rand(1, 10), 'name' => 'tag 3'],
            ['id' => rand(1, 10), 'name' => 'tag 4'],
            ['name' => 'Teste Tag'],
        ];
        $user = $this->fakeUsers(1);
        $user = $this->fakeUsersToArray($user);
        $user['tags'] = $tags;
        // Act
        $this->post('/api/users', $user);
        // Assert
        $this->seeInDatabase('users', ['name' => $user['name']]);
        $this->seeInDatabase('tags', ['name' => 'Teste Tag']);
        $rows = Tag::where('name', '=', 'Teste Tag')->delete();
        $this->assertEquals(1, $rows);
        User::all()->last()->delete();
    }
}
