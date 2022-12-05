Auth.routes - Server 

| HTTP Method 	| URI path      	           | Description                                           
|-------------	|------------------------------|------------------------------------------------------ 
| POST         	| `/api/auth/signup`          | Sign up                        
| POST         	| `/api/auth/login`           | Login - Get Token                 


User.routes - Server 

| HTTP Method 	| URI path      	           | Description                                           
|-------------	|------------------------------|------------------------------------------------------ 
| GET           | `api/users`                  | Get All Users               
| GET           | `api/users/:user_id/`        | Get One User                       
| DELETE        | `api/users/:user_id/delete`  | Delete One User                     
| PUT           | `api/users/:user_id/edit`    | Edit One User                      


Posts.routes - Server 

| HTTP Method 	| URI path      	                     | Description                                          
|-------------	|----------------------------------------|------------------------------------------------------ 
| GET           | `api/posts`                            | Get All Posts                   
| GET           | `api/posts/:post_id`                   | Get One Post                         
| DELETE        | `api/posts/:post_id/delete`            | Delete One Post                        
| POST          | `api/posts/create`                     | Create One Post                        
| GET           | `api/posts/createdPosts/:user_id`      | Get All Comments linked with a User                    

/posts/createdPosts 
 


Comments.routes - Server 

| HTTP Method 	| URI path      	                         | Description                                           
|-------------	|--------------------------------------------|-------------------------------------------
| GET           | `api/comments/:comment_id`                 | Get One Comment                    
| DELETE        | `api/posts/:comment_id/delete`             | Delete One Comment                 
| GET           | `api/comments/:post_id`                    | Get All Comments linked with a Post                   


Feelings.routes - Server 

| HTTP Method 	| URI path      	                   | Description                                         
|-------------	|--------------------------------------|-----------------------------------------------
| GET         | `api/feelings/`                        | Get All Feelings                      
| GET         | `api/feelings/:feeling_id`             | Get One Feeling                
| DELETE      | `api/feelings/:feeling_id/delete`      | Delete One Feeling                     
| PUT         | `api/feelings/:feeling_id/edit`        | Edit One Feeling                    








