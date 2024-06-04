function generateSignature() {
    const name = document.getElementById('name').value;
    const title = document.getElementById('title').value;
    const department = document.getElementById('department').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;

    const signatureHTML = `
        <div>
            <strong>${name}</strong><br>
            ${title}<br>
            ${department}<br>
            <span>📞 ${phone}</span><br>
            <span>📧 ${email}</span><br>
            <a href="http://www.alphalinesgroup.com">www.alphalinesgroup.com</a><br>
            <span>6428 Joliet Rd, Countryside, IL</span><br>
            <img src="logo.png" alt="Alphalines Logo" style="width:100px;">
        </div>
    `;

    document.getElementById('signaturePreview').innerHTML = signatureHTML;
}
