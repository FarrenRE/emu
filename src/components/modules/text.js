import React from 'react';

class Text extends React.Component {
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
            <td>
              <table align="center" border={0} cellPadding={0} cellSpacing={0} width="100%">
                <tbody>
                  <tr>
                    <td align="left" style={{fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '14px', color: '#494949'}}>Hello %%FIRST NAME%%,<br /><br />Lorem ipsum dolor sit amet, consectetur <a href="https://www.adma.com.au/events/2019/global-forum?utm_source=ADMA&utm_medium=EDM&utm_campaign=Monthly">adipiscing elit</a>. Nullam hendrerit fermentum turpis sit amet luctus. Curabitur ac purus tortor. <br /><br /> Phasellus nulla magna, commodo sit amet nisl eu, varius gravida tellus. Duis blandit diam nisi. Vestibulum euismod augue eu lacus viverra, a egestas tellus gravida. Aliquam augue urna, ornare quis enim in, fringilla tristique sapien.<br /><br /> Nulla sed odio ipsum. Donec congue fringilla ipsum vel hendrerit. Mauris tortor nunc, tempor in nulla quis, condimentum lacinia sapien. Nullam semper ex et consequat congue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras mauris ante, bibendum quis purus quis, vulputate varius sem.<br /><br /> Praesent non pretium ex.</td>
                  </tr>
                  <tr>
                    <td className="em_height" height={20} style={{fontSize: '1px', lineHeight: '1px'}} />
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
