 <?php
 var_export($_POST);
// $name = $_POST["name"];
// $email = $_POST["email"];
// $phone = $_POST["phone"];
// $website = $_POST["website"];
// $message = $_POST["message"];

// if(!empty($email) && !empty($message)){
//     if(!filter_var($email,FILTER_VALIDATE_EMAIL)){
//         echo "Enter a valid email address";
//     }else if(!filter_var($website,FILTER_VALIDATE_URL)){
//          echo "Enter a valid web site";
//     }else{
//         $receiver = "badi3bahida16@gamil.com";
//         $subject ="From: $name <$email>";
//         $body="Name: $name\nEmail: $email\nPhone: $phone";
//         $body.="\nWebsite: $webite\nMessage: $message";
//         $sender = "From: $email";

//         if(mail($receiver,$subject,$body,$sender)){
//             echo"email is sending";
//         }else{
//             echo"Sorry, failed to send your message!";
//         }
//     }
// }else{
//     echo "Email and message field is required";
// } 