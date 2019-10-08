import React from 'react';

const SocialLinks = ({ links, utms }) => {
  console.log('SocialLinks!');
  console.log(links.length);

  let html = '';
  let name = '';
  for (let l of Object.keys(links)) {
    switch (l) {
      case 'fb':
        name = 'Facebook';
        break;
      case 'tw':
        name = 'Twitter';
        break;
      case 'li':
        name = 'LinkedIn';
        break;
      default:
        console.log('SocialLinks error: default reached');
        break;
    }

    html += `<td align="center" valign="top" width="47" height="47"><a href=${links[l].url + utms + '&utm_content=footerSocial' + name} name="social_footer_${name}" target="_blank" rel="noopener noreferrer" xt="SPCLICK"><img alt="${name}" border="0" width="47" height="47" src="${links[l].img}" style="display: block;" /></a></td>`;
    html += `<td>&nbsp;</td>`;
  }

  return (
    <table align="left" border={0} cellPadding={0} cellSpacing={0} width={60 * Object.keys(links).length}>
      <tbody>
        <tr dangerouslySetInnerHTML={{ __html: html }}>
          {/* Footer links render here. */}
        </tr>
      </tbody>
    </table>
  );
};

export default SocialLinks;