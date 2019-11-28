import React, {useContext} from 'react';
import ThemeContext from './../ThemeContext'
import Editable from './../Editable';

export default function Button1(props) {
  const theme = useContext(ThemeContext)
  return (
    <table className="emu_button-1" align="center" border={0} cellPadding={0} cellSpacing={0} width="100%">
      <tbody>
        <tr>
          <td className="em_width" width={20}>&nbsp;</td>
          <td valign="top">
            <table align="center" border={0} cellPadding={0} cellSpacing={0} width="100%">
              <tbody>
                <tr>
                  <td>
                    <table align="center" border={0} cellPadding={0} cellSpacing={0} style={{ backgroundColor: `${theme.campaign.colors.primary}` }} width={160}>
                      <tbody>
                        <tr>
                          <td align="center" height={40} style={{ fontFamily: 'Helvetica, Arial, sans-serif', verticalAlign: 'middle', fontSize: '14px', textAlign: 'center', borderTop: `4px solid ${theme.campaign.colors.primaryLighter}`, borderBottom: `4px solid ${theme.campaign.colors.primaryDarker}` }} valign="middle"><Editable setActiveEdit={props.setActiveEdit} activeID={props.activeID}><a href={`${theme.org.website}${props.utms}&content=Button1`} name={`Button CTA ${props.id}`} style={{ color: `${theme.campaign.colors.secondary}`, display: 'block', textDecoration: 'none', fontWeight: 'bold' }} target="_blank" rel="noreferrer noopener">Click me!</a></Editable></td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td className="em_height" bgcolor="#FFFFFF" height={20} style={{ fontSize: '1px', lineHeight: '1px' }} />
                </tr>
              </tbody>
            </table>
          </td>
          <td className="em_width" width={20}>&nbsp;</td>
        </tr>
      </tbody>
    </table>
  );
}
