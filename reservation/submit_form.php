<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    echo "POSTリクエストが正しく送信されました。";
    echo "<pre>";
    print_r($_POST);
    echo "</pre>";
} else {
    echo "POSTリクエストではありません。";
}
?>

<!-- <?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // フォームからのデータを取得
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $date = htmlspecialchars($_POST['date']);
    $time = htmlspecialchars($_POST['time']);
    $message = htmlspecialchars($_POST['message']);
    $contact_method = htmlspecialchars($_POST['contact_method']);

    // メッセージ内容を作成
    $formatted_message = "名前: $name\nメールアドレス: $email\n電話番号: $phone\n希望日: $date\n希望時間: $time\n相談内容:\n$message\n連絡方法: $contact_method";

    // メール送信の設定
    $to = '1md10119w@gmail.com';  // メールを受け取るアドレスを入力
    $subject = "新しい相談予約";
    $headers = "From: $email";

    // LINE Notifyの設定
    $line_token = 'YOUR_LINE_NOTIFY_TOKEN'; // LINE Notifyトークンを入力

    // 連絡方法に応じてメールまたはLINEに通知
    if ($contact_method == 'email') {
        if (mail($to, $subject, $formatted_message, $headers)) {
            echo "予約がメールで送信されました。";
        } else {
            echo "メール送信中にエラーが発生しました。";
        }
    } elseif ($contact_method == 'line') {
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, "https://notify-api.line.me/api/notify");
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, "message=" . urlencode($formatted_message));
        curl_setopt($ch, CURLOPT_HTTPHEADER, array(
            'Content-Type: application/x-www-form-urlencoded',
            'Authorization: Bearer ' . $line_token
        ));
        $result = curl_exec($ch);
        curl_close($ch);

        if ($result) {
            echo "LINEに通知が送信されました。";
        } else {
            echo "LINE通知の送信中にエラーが発生しました。";
        }
    } else {
        echo "無効な連絡方法が選択されました。";
    }
}
?> -->
