import React from 'react';

const HeaderImage = ({ theme, utms }) => {
  console.log('HeaderImage theme');
  console.log(theme);
  console.log(theme.campaign.header.image);
  return (
    <table align="center" border={0} cellPadding={0} cellSpacing={0} width="100%">
      <tbody>
        <tr>
          <td><img style={{ display: 'block' }} alt="another desc" src={theme.campaign.header.image} /></td>
        </tr>
      </tbody>
    </table>
  );
};

export default HeaderImage;