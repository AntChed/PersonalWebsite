<?php
	function VerifierAdresseMail($adresse)
	{
		$Syntaxe='#^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,5}$#';
		if(preg_match($Syntaxe,$adresse))
			return true;
		else
			return false;
	}

	//Test cohérence Nom
	if ((isset($_POST['c_name'])) AND ($_POST['c_name']!='')) {


		//Test mail
		if ((isset($_POST['c_email'])) AND ($_POST['c_email']!='')) {

			//Test cohérence Email
			if (VerifierAdresseMail($_POST['c_email'])) {

				//Test message
				if ((isset($_POST['c_message'])) AND ($_POST['c_message']!='')) {


					//Tout est ok on envoi le mail
					$objet_mail = "Message depuis votre Page Perso";
					$message_mail = '
					<html>
					<head>
					</head>
					<body>
						Bonjour Antoine,<br /><br />Vous venez de recevoir le message suivant depuis votre page perso antoinechedebois.com :
						<br /><br />
						<ul>
							<li>Nom : '.$_POST['c_name'].'</li>
							<li>Email : '.$_POST['c_email'].'</li>
							<li>Message : '.$_POST['c_message'].'</li>
						</ul>
						<br /><br />
						A bientôt !
					</body>
					</html>
					';

					$headers_mail = "MIME-Version: 1.0\n";
					$headers_mail .= "Content-type: text/html; charset=utf-8\n";

					/* Quelques types d'entêtes : errors, From cc's, bcc's, etc */
					$headers_mail .= "From: Page Perso Antoine <antoinechedebois@gmail.com'>\n";
					// On envoi l'email
					if (mail('antoinechedebois@gmail.com', $objet_mail, $message_mail, $headers_mail) ) {

						$result['sendstatus']=1;
						$result['message']='<b>Votre demande a été enregistrée !</b>';

					}
					else {

						$result['sendstatus']=0;
						$result['message']='Impossible d\'envoyer votre demande (fonction mail).';

					}

				}
				else {
					$result['sendstatus']=0;
					$result['message']='Impossible d\'envoyer votre demande (Message Vide).';
				}

			}
			else {
				$result['sendstatus']=0;
				$result['message']='Impossible d\'envoyer votre demande (syntaxe Mail).';
			}

		}
		else {
			$result['sendstatus']=0;
			$result['message']='Impossible d\'envoyer votre demande (Mail vide).';
		}

	}
	else {
		$result['sendstatus']=0;
		$result['message']='Impossible d\'envoyer votre demande (Nom vide).';
	}

echo json_encode($result);
?>
