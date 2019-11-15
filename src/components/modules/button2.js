import React from 'react';
import Editable from './../Editable';

class Button2 extends React.Component {
  render() {
    return (
      <table className="emu_button-2" align="center" border={0} cellPadding={0} cellSpacing={0} width="100%">
        <tbody>
          <tr>
            <td className="em_width" width={20}>&nbsp;</td>
            <td valign="top">
              <table align="center" border={0} cellPadding={0} cellSpacing={0} width="100%">
                <tbody>
                  <tr>
                    <td width={145}>
                     <table align="center" border={0} cellPadding={0} cellSpacing={0} style={{ backgroundColor: `${this.props.theme.campaign.colors.primary}`, borderTop: `4px solid ${this.props.theme.campaign.colors.primaryLighter}`, borderBottom: `4px solid ${this.props.theme.campaign.colors.primaryDarker}` }} width={160}>
                        <tbody>
                          <tr> 
                          <td className="em_width" width={5}>&nbsp;</td>
                            <td align="center" height={40} style={{ fontFamily: 'Helvetica, Arial, sans-serif', verticalAlign: 'middle', fontSize: '14px', textAlign: 'center'}} valign="middle">
                              <Editable setActiveEdit={this.props.setActiveEdit} activeID={this.props.activeID}><a href={`${this.props.theme.org.website}${this.props.utms}&content=Button1`} name={`Button CTA ${this.props.id}`} style={{ color: `${this.props.theme.campaign.colors.secondary}`, display: 'block', textDecoration: 'none', fontWeight: 'bold' }} target="_blank" rel="noreferrer noopener">Click me!</a></Editable>
                            </td>
                            <td className="em_width" width={5}>&nbsp;</td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <td width={145}>
                     <table align="center" border={0} cellPadding={0} cellSpacing={0} style={{ backgroundColor: `${this.props.theme.campaign.colors.primary}`, borderTop: `4px solid ${this.props.theme.campaign.colors.primaryLighter}`, borderBottom: `4px solid ${this.props.theme.campaign.colors.primaryDarker}` }} width={160}>
                        <tbody>
                          <tr> 
                          <td className="em_width" width={5}>&nbsp;</td>
                            <td align="center" height={40} style={{ fontFamily: 'Helvetica, Arial, sans-serif', verticalAlign: 'middle', fontSize: '14px', textAlign: 'center'}} valign="middle">
                              <Editable setActiveEdit={this.props.setActiveEdit} activeID={this.props.activeID}><a href={`${this.props.theme.org.website}${this.props.utms}&content=Button1`} name={`Button CTA ${this.props.id}`} style={{ color: `${this.props.theme.campaign.colors.secondary}`, display: 'block', textDecoration: 'none', fontWeight: 'bold' }} target="_blank" rel="noreferrer noopener">Me too!</a></Editable>
                            </td>
                            <td className="em_width" width={5}>&nbsp;</td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2} height={20} style={{ fontSize: '1px', lineHeight: '1px' }}>&nbsp;</td>
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
}

export default Button2;
