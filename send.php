<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
header('Pragma: public');
header('Access-Control-Allow-Origin: *');

require './PHPMailer/Exception.php';
require './PHPMailer/PHPMailer.php';
require './PHPMailer/SMTP.php';

    if(isset($_POST['name'])) {
        $name = $_POST['name'];
    }
    if(isset($_POST['phone'])) {
        $phone = $_POST['phone'];
    }
    if(isset($_POST['email'])) {
        $email = $_POST['email'];
    }
    if(isset($_POST['download-file'])) {
        $downloadedFile = $_POST['download-file'];
    }

    $person = '';

    switch ($downloadedFile) {
        case 'Template':
            $person = 'Предположительно скачал: Инженер';
            break;
        case 'List':
            $person = 'Предположительно скачал: Секретарь';
            break;
        case 'Checklist':
            $person = 'Предположительно скачал: Руководитель';
            break;    
    }

    $heading = ($person === '') ? 'Скачали заявку с reg.argus' : 'Скачали КП + подарок (reg.argus)';

    $subject = $heading;
    $message = "От: $name\n<br />\n<br />Телефон: $phone\n<br />\n<br />Почта: $email\n<br />\n<br />$person";
    $html = '<html><head><meta http-equiv="content-type" content="text/html; charset=utf-8"></head><body>'.$message.'</body></html>';

//Load Composer's autoloader
$mail = new PHPMailer(true);                              // Passing `true` enables exceptions
try {
    $mail->CharSet = 'UTF-8';
    $mail->isSMTP();                                      // Set mailer to use SMTP
    $mail->Host = 'smtp.yandex.com';                        // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = 'argus@argus.group';                 // SMTP username
    $mail->Password = 'plSYrr4r';                           // SMTP password
    $mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
    $mail->Port = 465;                                    // TCP port to connect to

    //Recipients
    $mail->From='argus@argus.group';
    $mail->FromName = $heading;
    $mail->addAddress("tka4inni@gmail.com", "АРГУС");     // Add a recipient

    //Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = "=?UTF-8?B?".base64_encode($subject)."?=";
    $mail->Body    = $html;
    $mail->AltBody = $message;
    $mail->send();
    $return = true;
    echo json_encode($return);
    } 
    catch (Exception $e) {
    $return = false;
    echo json_encode($return);
}
?>