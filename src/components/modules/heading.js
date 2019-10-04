import React from 'react';
import Editable from './../Editable';

class Heading extends React.Component {
  render() {
    return (
      <table align="center" border={0} cellPadding={0} cellSpacing={0} style={{ minWidth: '100%' }} width="100%">
        <tbody>
          <tr>
            <td className="em_width" valign="top" width="20">&nbsp;</td>
            <td>
              <table align="center" border={0} cellPadding={0} cellSpacing={0} style={{ minWidth: '100%' }} width="100%">
                <tbody>
                  <tr>
                    <td height={45} style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '24px', color: 'rgb(73, 73, 73)', textAlign: 'center', width: '100%', fontWeight: 'bold' }}>
                      <Editable setActiveEdit={this.props.setActiveEdit} activeID={this.props.activeID}>I am an attractive heading</Editable></td>
                  </tr>
                  <tr>
                    <td className="em_height" height={20} style={{ fontSize: '1px', lineHeight: '1px', borderTop: `3px solid${this.props.theme.campaign.colors.primary}` }} />
                  </tr>
                </tbody>
              </table>
            </td>
            <td className="em_width" valign="top" width="20">&nbsp;</td>
          </tr>
        </tbody>
      </table>

    );
  }
}

export default Heading;
