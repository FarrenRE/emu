import React, {useContext} from 'react';
import ThemeContext from './../ThemeContext'

export default function Calendar(props) {
  const theme = useContext(ThemeContext)
  return (
    <table align="center" border={0} cellPadding={0} cellSpacing={0} width="100%">
      <tbody>
        <tr>
          <td valign="top">
            <table align="center" border={0} cellPadding={0} cellSpacing={0} width="100%" style={{fontFamily: theme.org.styles.fontFamily}}>
              <tbody>
                <tr bgcolor={theme.campaign.colors.primary} height={45}>
                  <th align="center" valign="middle" style={{textAlign: 'center', color: theme.campaign.colors.secondary, verticalAlign: 'middle', fontSize: '16px', fontWeight: 'bold', lineHeight: '30px'}}>Course</th>
                  <th align="center" valign="middle" style={{textAlign: 'center', color: theme.campaign.colors.secondary, verticalAlign: 'middle', fontSize: '16px', fontWeight: 'bold', lineHeight: '30px'}}>Location</th>
                  <th align="center" valign="middle" style={{textAlign: 'center', color: theme.campaign.colors.secondary, verticalAlign: 'middle', fontSize: '16px', fontWeight: 'bold', lineHeight: '30px'}}>Date</th>
                </tr>
                <tr>
                  <td
                    height={35}
                    align="center"
                    valign="middle"
                    style={{
                      paddingLeft: '10px',
                      textAlign: 'center',
                      color: theme.campaign.colors.secondary,
                      verticalAlign: 'middle',
                      fontSize: '12px',
                      fontWeight: 'bold',
                      lineHeight: '14px'}}>
                    <a
                      href={`${theme.org.website}${props.utms}&content=Calendar`}
                      name="Calendar link"
                      style={{color: theme.campaign.colors.link, textDecoration: 'underline'}}
                      target="_blank"
                      xt="SPCLICK"
                      rel="noreferrer noopener">Certificate of Amazingness
                    </a>
                  </td>
                  <td height={35} align="center" valign="middle" style={{textAlign: 'center', color: '#000000', verticalAlign: 'middle', fontSize: '12px', fontWeight: 'bold', lineHeight: '14px'}}>ONLINE</td>
                  <td height={35} align="center" valign="middle" style={{textAlign: 'center', color: '#000000', verticalAlign: 'middle', fontSize: '12px', fontWeight: 'bold', lineHeight: '14px'}}>Anytime</td>
                </tr>
                <tr bgcolor="#f2f2f2">
                  <td
                    height={35}
                    align="center"
                    valign="middle"
                    style={{
                      paddingLeft: '10px',
                      textAlign: 'center',
                      color: theme.campaign.colors.secondary,
                      verticalAlign: 'middle',
                      fontSize: '12px',
                      fontWeight: 'bold',
                      lineHeight: '14px'}}>
                    <a
                      href={`${theme.org.website}${props.utms}&content=Calendar`}
                      name="Calendar link"
                      style={{color: theme.campaign.colors.link, textDecoration: 'underline'}}
                      target="_blank"
                      xt="SPCLICK"
                      rel="noreferrer noopener">Awesome Fundamentals
                    </a>
                  </td>
                  <td height={35} align="center" valign="middle" style={{textAlign: 'center', color: '#000000', verticalAlign: 'middle', fontSize: '12px', fontWeight: 'bold', lineHeight: '14px'}}>ONLINE</td>
                  <td height={35} align="center" valign="middle" style={{textAlign: 'center', color: '#000000', verticalAlign: 'middle', fontSize: '12px', fontWeight: 'bold', lineHeight: '14px'}}>Anytime</td>
                </tr>                <tr>
                  <td
                    height={35}
                    align="center"
                    valign="middle"
                    style={{
                      paddingLeft: '10px',
                      textAlign: 'center',
                      color: theme.campaign.colors.secondary,
                      verticalAlign: 'middle',
                      fontSize: '12px',
                      fontWeight: 'bold',
                      lineHeight: '14px'}}>
                    <a
                      href={`${theme.org.website}${props.utms}&content=Calendar`}
                      name="Calendar link"
                      style={{color: theme.campaign.colors.link, textDecoration: 'underline'}}
                      target="_blank"
                      xt="SPCLICK"
                      rel="noreferrer noopener">Certificate of Amazingness
                    </a>
                  </td>
                  <td height={35} align="center" valign="middle" style={{textAlign: 'center', color: '#000000', verticalAlign: 'middle', fontSize: '12px', fontWeight: 'bold', lineHeight: '14px'}}>ONLINE</td>
                  <td height={35} align="center" valign="middle" style={{textAlign: 'center', color: '#000000', verticalAlign: 'middle', fontSize: '12px', fontWeight: 'bold', lineHeight: '14px'}}>Anytime</td>
                </tr>
                <tr bgcolor="#f2f2f2">
                  <td
                    height={35}
                    align="center"
                    valign="middle"
                    style={{
                      paddingLeft: '10px',
                      textAlign: 'center',
                      color: theme.campaign.colors.secondary,
                      verticalAlign: 'middle',
                      fontSize: '12px',
                      fontWeight: 'bold',
                      lineHeight: '14px'}}>
                    <a
                      href={`${theme.org.website}${props.utms}&content=Calendar`}
                      name="Calendar link"
                      style={{color: theme.campaign.colors.link, textDecoration: 'underline'}}
                      target="_blank"
                      xt="SPCLICK"
                      rel="noreferrer noopener">Awesome Fundamentals
                    </a>
                  </td>
                  <td height={35} align="center" valign="middle" style={{textAlign: 'center', color: '#000000', verticalAlign: 'middle', fontSize: '12px', fontWeight: 'bold', lineHeight: '14px'}}>ONLINE</td>
                  <td height={35} align="center" valign="middle" style={{textAlign: 'center', color: '#000000', verticalAlign: 'middle', fontSize: '12px', fontWeight: 'bold', lineHeight: '14px'}}>Anytime</td>
                </tr>                <tr>
                  <td
                    height={35}
                    align="center"
                    valign="middle"
                    style={{
                      paddingLeft: '10px',
                      textAlign: 'center',
                      color: theme.campaign.colors.secondary,
                      verticalAlign: 'middle',
                      fontSize: '12px',
                      fontWeight: 'bold',
                      lineHeight: '14px'}}>
                    <a
                      href={`${theme.org.website}${props.utms}&content=Calendar`}
                      name="Calendar link"
                      style={{color: theme.campaign.colors.link, textDecoration: 'underline'}}
                      target="_blank"
                      xt="SPCLICK"
                      rel="noreferrer noopener">Certificate of Amazingness
                    </a>
                  </td>
                  <td height={35} align="center" valign="middle" style={{textAlign: 'center', color: '#000000', verticalAlign: 'middle', fontSize: '12px', fontWeight: 'bold', lineHeight: '14px'}}>ONLINE</td>
                  <td height={35} align="center" valign="middle" style={{textAlign: 'center', color: '#000000', verticalAlign: 'middle', fontSize: '12px', fontWeight: 'bold', lineHeight: '14px'}}>Anytime</td>
                </tr>
                <tr bgcolor="#f2f2f2">
                  <td
                    height={35}
                    align="center"
                    valign="middle"
                    style={{
                      paddingLeft: '10px',
                      textAlign: 'center',
                      color: theme.campaign.colors.secondary,
                      verticalAlign: 'middle',
                      fontSize: '12px',
                      fontWeight: 'bold',
                      lineHeight: '14px'}}>
                    <a
                      href={`${theme.org.website}${props.utms}&content=Calendar`}
                      name="Calendar link"
                      style={{color: theme.campaign.colors.link, textDecoration: 'underline'}}
                      target="_blank"
                      xt="SPCLICK"
                      rel="noreferrer noopener">Awesome Fundamentals
                    </a>
                  </td>
                  <td height={35} align="center" valign="middle" style={{textAlign: 'center', color: '#000000', verticalAlign: 'middle', fontSize: '12px', fontWeight: 'bold', lineHeight: '14px'}}>ONLINE</td>
                  <td height={35} align="center" valign="middle" style={{textAlign: 'center', color: '#000000', verticalAlign: 'middle', fontSize: '12px', fontWeight: 'bold', lineHeight: '14px'}}>Anytime</td>
                </tr>                <tr>
                  <td
                    height={35}
                    align="center"
                    valign="middle"
                    style={{
                      paddingLeft: '10px',
                      textAlign: 'center',
                      color: theme.campaign.colors.secondary,
                      verticalAlign: 'middle',
                      fontSize: '12px',
                      fontWeight: 'bold',
                      lineHeight: '14px'}}>
                    <a
                      href={`${theme.org.website}${props.utms}&content=Calendar`}
                      name="Calendar link"
                      style={{color: theme.campaign.colors.link, textDecoration: 'underline'}}
                      target="_blank"
                      xt="SPCLICK"
                      rel="noreferrer noopener">Certificate of Amazingness
                    </a>
                  </td>
                  <td height={35} align="center" valign="middle" style={{textAlign: 'center', color: '#000000', verticalAlign: 'middle', fontSize: '12px', fontWeight: 'bold', lineHeight: '14px'}}>ONLINE</td>
                  <td height={35} align="center" valign="middle" style={{textAlign: 'center', color: '#000000', verticalAlign: 'middle', fontSize: '12px', fontWeight: 'bold', lineHeight: '14px'}}>Anytime</td>
                </tr>
                <tr bgcolor="#f2f2f2">
                  <td
                    height={35}
                    align="center"
                    valign="middle"
                    style={{
                      paddingLeft: '10px',
                      textAlign: 'center',
                      color: theme.campaign.colors.secondary,
                      verticalAlign: 'middle',
                      fontSize: '12px',
                      fontWeight: 'bold',
                      lineHeight: '14px'}}>
                    <a
                      href={`${theme.org.website}${props.utms}&content=Calendar`}
                      name="Calendar link"
                      style={{color: theme.campaign.colors.link, textDecoration: 'underline'}}
                      target="_blank"
                      xt="SPCLICK"
                      rel="noreferrer noopener">Awesome Fundamentals
                    </a>
                  </td>
                  <td height={35} align="center" valign="middle" style={{textAlign: 'center', color: '#000000', verticalAlign: 'middle', fontSize: '12px', fontWeight: 'bold', lineHeight: '14px'}}>ONLINE</td>
                  <td height={35} align="center" valign="middle" style={{textAlign: 'center', color: '#000000', verticalAlign: 'middle', fontSize: '12px', fontWeight: 'bold', lineHeight: '14px'}}>Anytime</td>
                </tr>                <tr>
                  <td
                    height={35}
                    align="center"
                    valign="middle"
                    style={{
                      paddingLeft: '10px',
                      textAlign: 'center',
                      color: theme.campaign.colors.secondary,
                      verticalAlign: 'middle',
                      fontSize: '12px',
                      fontWeight: 'bold',
                      lineHeight: '14px'}}>
                    <a
                      href={`${theme.org.website}${props.utms}&content=Calendar`}
                      name="Calendar link"
                      style={{color: theme.campaign.colors.link, textDecoration: 'underline'}}
                      target="_blank"
                      xt="SPCLICK"
                      rel="noreferrer noopener">Certificate of Amazingness
                    </a>
                  </td>
                  <td height={35} align="center" valign="middle" style={{textAlign: 'center', color: '#000000', verticalAlign: 'middle', fontSize: '12px', fontWeight: 'bold', lineHeight: '14px'}}>ONLINE</td>
                  <td height={35} align="center" valign="middle" style={{textAlign: 'center', color: '#000000', verticalAlign: 'middle', fontSize: '12px', fontWeight: 'bold', lineHeight: '14px'}}>Anytime</td>
                </tr>
                <tr bgcolor="#f2f2f2">
                  <td
                    height={35}
                    align="center"
                    valign="middle"
                    style={{
                      paddingLeft: '10px',
                      textAlign: 'center',
                      color: theme.campaign.colors.secondary,
                      verticalAlign: 'middle',
                      fontSize: '12px',
                      fontWeight: 'bold',
                      lineHeight: '14px'}}>
                    <a
                      href={`${theme.org.website}${props.utms}&content=Calendar`}
                      name="Calendar link"
                      style={{color: theme.campaign.colors.link, textDecoration: 'underline'}}
                      target="_blank"
                      xt="SPCLICK"
                      rel="noreferrer noopener">Awesome Fundamentals
                    </a>
                  </td>
                  <td height={35} align="center" valign="middle" style={{textAlign: 'center', color: '#000000', verticalAlign: 'middle', fontSize: '12px', fontWeight: 'bold', lineHeight: '14px'}}>ONLINE</td>
                  <td height={35} align="center" valign="middle" style={{textAlign: 'center', color: '#000000', verticalAlign: 'middle', fontSize: '12px', fontWeight: 'bold', lineHeight: '14px'}}>Anytime</td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr>
          <td className="em_height" height={20} style={{ fontSize: '1px', lineHeight: '1px' }}>&nbsp;</td>
        </tr>
      </tbody>
    </table>
  );
}
