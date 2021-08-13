
function printDiv() {

    try {
        var divContents = document.getElementById("A4Page").innerHTML;
        var a = window.open('');
        a.document.write('<html>');
        a.document.write('<head>');
        a.document.write('<title>Shaikh Mohammed</title>');
        a.document.write('<link rel="stylesheet" href="bootstrap-4.3.1-dist/css/bootstrap.css">');
        a.document.write('<link rel="stylesheet" href="min.css">');
        a.document.write('<link rel="stylesheet" href="fontawesome-free-5.15.4-web/css/all.css">');
        a.document.write('<script src="test.js"></script>');
        a.document.write(divContents);
        a.document.write('</body></html>');
        a.document.close();
        a.print();
    } catch (error) {
        alert(error)
    }
}