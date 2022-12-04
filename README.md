Auth.routes - Server 

| HTTP Method 	| URI path      	           | Description                                           | JSON  |
|-------------	|------------------------------|------------------------------------------------------ |-------|
| POST         	| `/api/auth/sign-up`          | Sign up                               |       |
| POST         	| `/api/auth/log-in`           | Login - Get Token                          |       |
| POST         	| `/api/auth/logout` 	       | User Log out - Destroy Session |       |          


User.routes - Server 

| HTTP Method 	| URI path      	           | Description                                           | JSON  |
|-------------	|------------------------------|------------------------------------------------------ |-------|
| GET           | `api/users`                  | Get All Users                     |      |    
| GET           | `api/users/getOneUser/:user_id`         | Get One User                      |      |     
| POST          | `api/users/:user_id/delete`  | Delete One User                      |      |     
| PUT           | `api/users/:user_id/edit`    | Edit One User                      |      |     


Posts.routes - Server 

| HTTP Method 	| URI path      	           | Description                                           | JSON  |
|-------------	|------------------------------|------------------------------------------------------ |-------|
| GET           | `api/posts`                 | Get All Posts                     |      |    
| GET           | `api/posts/getOnePost/:post_id`         | Get One Post                      |      |     
| POST          | `api/posts/:post_id/delete`  | Delete One Post                      |      |     
| POST          | `api/posts/create`           | Create One Post                      |      |     
| GET           | `api/posts/createdPosts/:user_id`   | Get All Comments linked with a User                    |      |   

/posts/createdPosts 
 


Comments.routes - Server 

| HTTP Method 	| URI path      	           | Description                                           | JSON  |
|-------------	|------------------------------|------------------------------------------------------ |-------|
| GET         | `api/comments/getOneComment/:comment_id`                  | Get One Comment                 |      |     
| POST         | `api/posts/:comment_id/delete`                  | Delete One Comment                       |      |     
| GET           | `api/comments/:post_id`      | Get All Comments linked with a Post                    |      |   



Feelings.routes - Server 

| HTTP Method 	| URI path      	                  | Description                                           | JSON  |
|-------------	|------------------------------|------------------------------------------------------ |-------|
| GET         | `api/feelings/`                        | Get All Feelings                     |      |    
| GET         | `api/feelings/getOneFeeling/:feeling_id`             | Get One Feeling                 |      |     
| POST        | `api/feelings/:feeling_id/delete`      | Delete One Feeling                       |      |     
| PUT         | `api/feelings/:feeling_id/edit`        | Edit One Feeling                      |      |     






<!-- Details donde va? -->
<!-- Revisar created post en las rutas  -->
<!-- Created posts van donde? En cliente o servidor  -->





