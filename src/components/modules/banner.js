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
            <td align="center"><a rel="noopener noreferrer" href={ `${ this.props.theme.org.website }${ this.props.utms }&content=Banner` } name={ `Banner_${ this.props.id }` } target="_blank" xt="SPCLICK"><img alt="Banner" border={0} height={330} src="https://via.placeholder.com/600x330" style={{display: 'block', height: 'auto', width: '100%', maxWidth: '600px'}} width={600} xt="SPIMAGE" /></a></td>
          </tr>
          <tr>
            <td className="em_height" height={20} style={{fontSize: '1px', lineHeight: '1px'}} />
          </tr>
        </tbody>
      </table>
      /* /banner */
    );
  }
}

export default Banner;
