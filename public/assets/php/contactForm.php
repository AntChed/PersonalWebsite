<?php
function VerifierAdresseMail($adresse)
{
    $Syntaxe = '#^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,5}$#';
    return preg_match($Syntaxe, $adresse) === 1;
}

header('Content-Type: application/json; charset=utf-8');

if ((isset($_POST['c_name'])) && ($_POST['c_name'] != '')) {
    if ((isset($_POST['c_email'])) && ($_POST['c_email'] != '')) {
        if (VerifierAdresseMail($_POST['c_email'])) {
            if ((isset($_POST['c_message'])) && ($_POST['c_message'] != '')) {
                $objet_mail = 'Message depuis votre Page Perso';
                $message_mail = '
                <html>
                <head>
                </head>
                <body>
                    Bonjour Antoine,<br /><br />Vous venez de recevoir le message suivant depuis votre page perso antoinechedebois.com :
                    <br /><br />
                    <ul>
                        <li>Nom : ' . $_POST['c_name'] . '</li>
                        <li>Email : ' . $_POST['c_email'] . '</li>
                        <li>Message : ' . $_POST['c_message'] . '</li>
                    </ul>
                    <br /><br />
                    A bientôt !
                </body>
                </html>
                ';

                $headers_mail = "MIME-Version: 1.0\n";
                $headers_mail .= "Content-type: text/html; charset=utf-8\n";
                $headers_mail .= "From: Page Perso Antoine <antoinechedebois@gmail.com>\n";

                if (mail('antoinechedebois@gmail.com', $objet_mail, $message_mail, $headers_mail)) {
                    $result['sendstatus'] = 1;
                    $result['message'] = '<b>Votre demande a été enregistrée !</b>';
                } else {
                    $result['sendstatus'] = 0;
                    $result['message'] = 'Impossible d\'envoyer votre demande (fonction mail).';
                }
            } else {
                $result['sendstatus'] = 0;
                $result['message'] = 'Impossible d\'envoyer votre demande (Message Vide).';
            }
        } else {
            $result['sendstatus'] = 0;
            $result['message'] = 'Impossible d\'envoyer votre demande (syntaxe Mail).';
        }
    } else {
        $result['sendstatus'] = 0;
        $result['message'] = 'Impossible d\'envoyer votre demande (Mail vide).';
    }
} else {
    $result['sendstatus'] = 0;
    $result['message'] = 'Impossible d\'envoyer votre demande (Nom vide).';
}

echo json_encode($result);
?>
