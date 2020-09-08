<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

header('Pragma: public'); // required
header("Expires: Sat, 26 Jul 1997 05:00:00 GMT"); // Date in the past
header("Cache-Control: no-store, no-cache, must-revalidate");

require './PHPMailer/Exception.php';
require './PHPMailer/PHPMailer.php';
require './PHPMailer/SMTP.php';


if(isset($_POST['email'])) {
    $email = $_POST['email'];
}
if(isset($_POST['name'])) {
    $name = $_POST['name'];
}
if(isset($_POST['files'])) {
    $files = $_POST["files"];
}
if(isset($_POST['filesName'])) {
    $fileNames = $_POST["filesName"];
}

$gift = '';
$giftName = '';
$kp = '';

switch ($fileNames) {
    case 'Template':
        $gift = '"Шаблоны для заполнения отчётов"';
        $giftName = 'Шаблоны.zip';
        $kp = './assets/download/kp.pdf';
        break;
    case 'List':
        $gift = '"Список бесплатных сервисов для офисной работы"';
        $giftName = 'Список.pdf';
        $kp = './assets/download/kp.pdf';
        break;
    case 'Checklist':
        $gift = '"Чеклист по внедрению техники безопасности"';
        $giftName = 'Чеклист.pdf';
        $kp = './assets/download/kp.pdf';
        break;
}

$mail = new PHPMailer(true);                              // Passing `true` enables exceptions
$message = 'Уважаемый '.$name.'. Высылаем Вам коммерческое предложение по регистрации электролаборатории и наш подарок - '.$gift.' (в приложении этого письма). Надеемся на долгосрочное сотрудничество. Наш email: argus@argus-eko.ru и телефон: +7(495)585-09-82. Обращайтесь по любым вопросам.';
$html = '<html><head><meta http-equiv="content-type" content="text/html; charset=utf-8"></head><body>'.$message.'<br/><br/></body></html>';
try {
    $mail->CharSet = 'UTF-8';
    $mail->isSMTP();                                      // Set mailer to use SMTP
    $mail->Host = 'smtp.yandex.com';                      // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = 'argus@argus.group';                // SMTP username
    $mail->Password = 'FD4qu9olwK';                       // SMTP password
    $mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
    $mail->Port = 465;                                    // TCP port to connect to

    //Recipients
    $mail->From='argus@argus.group';
    $mail->FromName='Группа компаний АРГУС';
    $mail->addAddress($email);                            // Add a recipient

    //Attachments
    $mail->addAttachment($kp, 'КП АРГУС.pdf', 'base64');
    $mail->addAttachment($files, $giftName, 'base64');

    //Content
    $mail->isHTML(true);
    $mail->Subject = 'Коммерческое предложение + подарок';
    $mail->Body    = $html;
    $mail->AltBody = '';
    $mail->send();
    $return = true;
    echo json_encode($return);
} catch (Exception $e) {
    $return = false;
    echo json_encode($return);
}
?>