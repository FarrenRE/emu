import React from 'react';

const HeaderImage = ({ theme, utms }) => {
  return (
    <table align="center" bgcolor="#ffffff" border={0} cellPadding={0} cellSpacing={0} width="100%">
      <tbody>
        <tr>
          <td><img style={{ display: 'block' }} src="https://via.placeholder.com/600x100.jpg" /></td>
        </tr>
      </tbody>
    </table>
  );
};

export default HeaderImage;