import React from 'react';
import Editable from './../Editable';

class Text extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({});
  }
  render() {
    return (
      <table className="emu_intro" align="center" border={0} cellPadding={0} cellSpacing={0} width="100%">
        <tbody>
          <tr>
            <td className="em_width" width={20}>&nbsp;</td>
            <td>
              <table align="center" border={0} cellPadding={0} cellSpacing={0} width="100%">
                <tbody>
                  <tr>
                    <td align="left" style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '14px', color: '#494949' }}>
                      <Editable setActiveEdit={this.props.setActiveEdit} activeID={this.props.activeID}>
                        Hello %%FIRST NAME%%,<br /><br />Lorem ipsum dolor sit amet, consectetur <a href={`${this.props.theme.org.website}${this.props.utms}&content=inline`}>adipiscing elit</a>. Nullam hendrerit fermentum turpis sit amet luctus. Curabitur ac purus tortor. <br /><br /> Praesent non pretium ex.
                      </Editable>
                    </td>
                  </tr>
                  <tr>
                    <td className="em_height" height={20} style={{ fontSize: '1px', lineHeight: '1px' }} />
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

export default Text;
