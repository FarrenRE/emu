import React, {useContext} from 'react';
import ThemeContext from './ThemeContext'

export default function SocialLinks ({ links, utms }) {
  const theme = useContext(ThemeContext)
  let html = '';
  let name = '';
  let iconUrl = '';
  for (let l of Object.keys(links)) {

    switch (l) {
      case 'fb':
        name = 'Facebook';
        iconUrl = 'https://adma-public-assets.s3-ap-southeast-2.amazonaws.com/edm/EMU/social-ico_fb.png';
        break;
      case 'tw':
        name = 'Twitter';
        iconUrl = 'https://adma-public-assets.s3-ap-southeast-2.amazonaws.com/edm/EMU/social-ico_tw.png';
        break;
      case 'li':
        name = 'LinkedIn';
        iconUrl = 'https://adma-public-assets.s3-ap-southeast-2.amazonaws.com/edm/EMU/social-ico_li.png';
        break;
      default:
        console.log('SocialLinks error: default reached');
        break;
    }

    html += `<td align="center" valign="top" width="47" height="47" bgcolor="${ theme.org.colors.socialIcons }"><a href=${links[l].url + utms + '&utm_content=footerSocial' + name} name="social_footer_${name}" target="_blank" rel="noopener noreferrer" xt="SPCLICK"><img alt="${name}" border="0" width="47" height="47" src="${iconUrl}" style="display: block;" /></a></td>`;
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
