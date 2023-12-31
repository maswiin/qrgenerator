        function generateQRCode() {
            var input1 = document.getElementById("input1").value;
            var input2 = document.getElementById("input2").value;
            var awalSeri = document.getElementById("awalSeri").value;
            var akhirSeri = document.getElementById("akhirSeri").value;
            var qrcodesContainer = document.getElementById("qrcodes");
            qrcodesContainer.innerHTML = "";

            for (var seri = parseInt(awalSeri); seri <= parseInt(akhirSeri); seri++) {
                var qrText = input1 + seri + input2;
                var qrContainer = document.createElement("div");
                qrContainer.classList.add("qrcode-item");

                var qrcode = new QRCode(qrContainer, {
                    text: qrText,
                    width: 250,
                    height: 250
                });

                var qrName = document.createElement("p");
                qrName.innerText = qrText;
                qrContainer.appendChild(qrName);

                qrcodesContainer.appendChild(qrContainer);
            }
        }
