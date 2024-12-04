# DevTinder API's

## authRouter
-POST  /signup
-POST  /login
-POST  /logout

## profileRouter
-GET   /profile/view
-PATCH /profile/edit
-PATCH /profile/password

## connectionRequestRouter
-POST  /request/send/interested/:userId
-POST  /request/send/ignored/:userId
-POST  /request/review/accepted/:requestId
-POST  /request/review/rejected/:requestId

## userRouter
-GET   /user/connections
-GET   /user/requests/received
-GET   /user/feed        - gets you the profile of other users on the platform 


status: ignore , interested , accepted , rejected 

