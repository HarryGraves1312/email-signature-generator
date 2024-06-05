function generateSignature() {
    const name = document.getElementById('name').value;
    const title = document.getElementById('title').value;
    const department = document.getElementById('department').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;

    const signatureHTML = `
        <table cellpadding="0" cellspacing="0" style="vertical-align: -webkit-baseline-middle; font-size: large; font-family: Tahoma;">
            <tbody>
                <tr>
                    <td>
                        <table cellpadding="0" cellspacing="0" style="vertical-align: -webkit-baseline-middle; font-size: large; font-family: Tahoma;">
                            <tbody>
                                <tr>
                                    <td style="vertical-align: middle;">
                                        <h2 style="margin: 0px; font-size: 20px; color: #EE1E2D; font-weight: 600;">
                                            <span>${name}</span>
                                        </h2>
                                        <p style="margin: 0px; color: rgb(35, 31, 32); font-size: 16px; line-height: 24px; font-weight: bold;">
                                            <span>${title}</span>
                                        </p>
                                        <p style="margin: 0px; font-weight: 500; color: rgb(35, 31, 32); font-size: 16px; line-height: 24px;">
                                            <span>${department}</span>
                                            <span>&nbsp;|&nbsp;</span>
                                            <span>Alpha Lines - Logistics Group</span>
                                        </p>
                                    </td>
                                    <td width="30"><div style="width: 30px;"></div></td>
                                    <td style="width: 1px; border-bottom: none; border-left: 1px solid rgb(238, 30, 45);"></td>
                                    <td width="30"><div style="width: 30px;"></div></td>
                                    <td style="vertical-align: middle;">
                                        <table cellpadding="0" cellspacing="0" style="vertical-align: -webkit-baseline-middle; font-size: large; font-family: Tahoma;">
                                            <tbody>
                                                <tr height="25" style="vertical-align: middle;">
                                                    <td width="30" style="vertical-align: middle;">
                                                        <span style="display: inline-block; background-color: rgb(238, 30, 45);">
                                                            <img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/phone-icon-2x.png" alt="mobilePhone" width="13" style="display: block; background-color: rgb(238, 30, 45);">
                                                        </span>
                                                    </td>
                                                    <td style="padding: 0px; color: rgb(35, 31, 32);">
                                                        <a href="tel:${phone}" style="text-decoration: none; color: rgb(35, 31, 32); font-size: 12px;">
                                                            <span>${phone}</span>
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr height="25" style="vertical-align: middle;">
                                                    <td width="30" style="vertical-align: middle;">
                                                        <span style="display: inline-block; background-color: rgb(238, 30, 45);">
                                                            <img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/email-icon-2x.png" alt="emailAddress" width="13" style="display: block; background-color: rgb(238, 30, 45);">
                                                        </span>
                                                    </td>
                                                    <td style="padding: 0px;">
                                                        <a href="mailto:${email}" style="text-decoration: none; color: rgb(35, 31, 32); font-size: 12px;">
                                                            <span>${email}</span>
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr height="25" style="vertical-align: middle;">
                                                    <td width="30" style="vertical-align: middle;">
                                                        <span style="display: inline-block; background-color: rgb(238, 30, 45);">
                                                            <img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/link-icon-2x.png" alt="website" width="13" style="display: block; background-color: rgb(238, 30, 45);">
                                                        </span>
                                                    </td>
                                                    <td style="padding: 0px;">
                                                        <a href="https://www.alphalinesgroup.com" style="text-decoration: none; color: rgb(35, 31, 32); font-size: 12px;">
                                                            <span>www.alphalinesgroup.com</span>
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr height="25" style="vertical-align: middle;">
                                                    <td width="30" style="vertical-align: middle;">
                                                        <span style="display: inline-block; background-color: rgb(238, 30, 45);">
                                                            <img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/address-icon-2x.png" alt="address" width="13" style="display: block; background-color: rgb(238, 30, 45);">
                                                        </span>
                                                    </td>
                                                    <td style="padding: 0px;">
                                                        <span style="font-size: 12px; color: rgb(35, 31, 32);">
                                                            <span>${address}</span>
                                                        </span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td>
                        <table cellpadding="0" cellspacing="0" style="width: 100%; vertical-align: -webkit-baseline-middle; font-size: large; font-family: Tahoma;">
                            <tbody>
                                <tr><td height="30"></td></tr>
                                <tr>
                                    <td style="width: 562.5px; border-bottom: 1px solid rgb(238, 30, 45); border-left: none; display: block;"></td>
                                </tr>
                                <tr><td height="30"></td></tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td>
                        <table cellpadding="0" cellspacing="0" style="width: 100%; vertical-align: -webkit-baseline-middle; font-size: large; font-family: Tahoma;">
                            <tbody>
                                <tr>
                                    <td style="vertical-align: top;">
                                        <img src="logo.png" role="presentation" width="200" style="display: inline-block; max-width: 200px;">
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
    `;

    document.getElementById('signaturePreview').innerHTML = signatureHTML;
    document.getElementById('copyButton').style.display = 'inline'; // Prikazujemo dugme za kopiranje
}

function copySignature() {
    const signature = document.getElementById('signaturePreview').innerHTML;
    const tempElement = document.createElement('div');
    tempElement.innerHTML = signature;
    document.body.appendChild(tempElement);

    const range = document.createRange();
    range.selectNodeContents(tempElement);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);

    try {
        document.execCommand('copy');
        alert('Signature copied to clipboard!');
    } catch (err) {
        alert('Failed to copy signature.');
    }

    document.body.removeChild(tempElement);
}
