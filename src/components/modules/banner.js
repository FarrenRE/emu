import React, {useContext} from 'react';
import ThemeContext from './../ThemeContext'
import EditableImage from './../EditableImage';

export default function Banner(props) {
  const theme = useContext( ThemeContext )
  return (
    /* banner */
    <table className="emu_banner" align="center" border={0} cellPadding={0} cellSpacing={0} width="100%">
      <tbody>
        <tr>
          <td align="center"><EditableImage setActiveEdit={props.setActiveEdit} activeID={props.activeID} alt="banner" width={600} height={330} src="https://via.placeholder.com/600x330.jpg" style={{ display: 'block', height: 'auto', width: '100%', maxWidth: '600px' }} xt="SPIMAGE" /></td>
        </tr>
        <tr>
          <td className="em_height" height={20} style={{ fontSize: '1px', lineHeight: '1px' }} />
        </tr>
      </tbody>
    </table>
    /* /banner */
  );
}
