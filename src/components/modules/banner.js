import React from 'react';

class Banner extends React.Component {
  constructor(props) {
    super(props)
    this.state = {};
  }
  render() {
    return (
      /* banner */
      <table align="center" border={0} cellPadding={0} cellSpacing={0} width="100%">
        <tbody>
          <tr>
            <td align="center"><a rel="noopener noreferrer" id="Hyperlink_20170116_151918415" href="https://www.adma.com.au/events/2019/global-forum/buy-tickets?utm_source=ADMA&utm_medium=EDM&utm_campaign=Monthly" name="Ticket CTA Early bird" target="_blank" xt="SPCLICK"><img alt="Global Forum 2019" border={0} height={330} src="https://via.placeholder.com/600x350" style={{display: 'block', height: 'auto', width: '100%', maxWidth: '600px'}} title="Global Forum 2019" width={600} xt="SPIMAGE" /></a></td>
          </tr>
        </tbody>
      </table>
      /* /banner */
    );
  }
}

export default Banner;
