import React from 'react';
import Editable from './../Editable';

class Button2 extends React.Component {
  render() {
    return (
      <table align="center" border={0} cellPadding={0} cellSpacing={0} width="100%">
        <tbody>
          <tr>
            <td className="em_width" width={20}>&nbsp;</td>
            <td valign="top">
              <table align="center" border={0} cellPadding={0} cellSpacing={0} width="100%">
                <tbody>
                  <tr>
                    <td width={145}>
                      <table align="center" border={0} cellPadding={0} cellSpacing={0} style={{ backgroundColor: `${this.props.theme.campaign.colors.primary}` }} width={145}>
                        <tbody>
                          <tr>
                            <td align="center" height={40} style={{ fontFamily: 'Helvetica, Arial, sans-serif', verticalAlign: 'middle', fontSize: '14px', textAlign: 'center', borderTop: `4px solid ${this.props.theme.campaign.colors.primaryLighter}`, borderBottom: `4px solid ${this.props.theme.campaign.colors.primaryDarker}` }} valign="middle">
                              <Editable setActiveEdit={this.props.setActiveEdit} activeID={this.props.activeID}><a href={`${this.props.theme.org.website}${this.props.utms}&content=Button2L`} name={`Button2L CTA ${this.props.id}`} style={{ color: `${this.props.theme.campaign.colors.secondary}`, display: 'block', textDecoration: 'none', fontWeight: 'bold' }} target="_blank" rel="noreferrer noopener">Click me!</a></Editable>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <td width={145}>
                      <table align="center" border={0} cellPadding={0} cellSpacing={0} style={{ backgroundColor: `${this.props.theme.campaign.colors.primary}` }} width={145}>
                        <tbody>
                          <tr>
                            <td align="center" height={40} style={{ fontFamily: 'Helvetica, Arial, sans-serif', verticalAlign: 'middle', fontSize: '14px', textAlign: 'center', borderTop: `4px solid ${this.props.theme.campaign.colors.primaryLighter}`, borderBottom: `4px solid ${this.props.theme.campaign.colors.primaryDarker}` }} valign="middle">
                              <Editable setActiveEdit={this.props.setActiveEdit} activeID={this.props.activeID}><a href={`${this.props.theme.org.website}${this.props.utms}&content=Button2R`} name={`Button2R CTA ${this.props.id}`} style={{ color: `${this.props.theme.campaign.colors.secondary}`, display: 'block', textDecoration: 'none', fontWeight: 'bold' }} target="_blank" rel="noreferrer noopener">Me too!</a></Editable>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={3} height={15} style={{ fontSize: '1px', lineHeight: '1px' }}>&nbsp;</td>
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
