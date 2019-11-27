import React, {useContext} from 'react';
import ThemeContext from './../ThemeContext'

export default function HeaderImage ({ utms }) {
  const theme = useContext(ThemeContext)
  return (
    <table align="center" border={0} cellPadding={0} cellSpacing={0} width="100%">
      <tbody>
        <tr>
          <td><img style={{ display: 'block', width: '100%', maxWidth: '600px' }} alt={theme.campaign.name} src={theme.campaign.header.image} /></td>
        </tr>
      </tbody>
    </table>
  );
};
