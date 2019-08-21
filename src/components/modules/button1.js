import React from 'react';

class Button1 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {};
  }
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
                    <td>
                      <table align="center" border={0} cellPadding={0} cellSpacing={0} style={{backgroundColor: `${ this.props.theme.colors.primary }`}} width={160}>
                        <tbody>
                          <tr>
                            <td align="center" height={40} style={{fontFamily: 'Helvetica, Arial, sans-serif', verticalAlign: 'middle', fontSize: '14px', textAlign: 'center', borderTop: `4px solid ${ this.props.theme.colors.primaryLighter }`, borderBottom: `4px solid ${ this.props.theme.colors.primaryDarker }`}} valign="middle"><a href={ `${ this.props.theme.org.website }${ this.props.utms }&content=Button1` } name={ `Button CTA ${ this.props.id }` } style={{color: '#FFFFFF', display: 'block', textDecoration: 'none', fontWeight: 'bold'}} target="_blank" rel="noreferrer noopener">Click me!</a></td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td className="em_height" bgcolor="#FFFFFF" height={20} style={{fontSize: '1px', lineHeight: '1px'}} />
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

export default Button1;
