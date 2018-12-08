import red from '@material-ui/core/colors/red';
import pink from '@material-ui/core/colors/pink';
import purple from '@material-ui/core/colors/purple';
import indigo from '@material-ui/core/colors/indigo';
import blue from '@material-ui/core/colors/blue';
import teal from '@material-ui/core/colors/teal';
import green from '@material-ui/core/colors/green';
import cyan from '@material-ui/core/colors/cyan';
import lightBlue from '@material-ui/core/colors/lightBlue';
import lightGreen from '@material-ui/core/colors/lightGreen';
import amber from '@material-ui/core/colors/amber';
import orange from '@material-ui/core/colors/orange';
import deepOrange from '@material-ui/core/colors/deepOrange';
import deepPurple from '@material-ui/core/colors/deepPurple';
import blueGray from '@material-ui/core/colors/blueGrey';
import lime from '@material-ui/core/colors/lime';
import yellow from '@material-ui/core/colors/yellow';

const colors = [
  red, pink, purple, indigo, blue, teal, green, lightGreen,
  amber, orange, deepOrange, deepPurple, blueGray, lightBlue, cyan, lime, yellow
]

export default function colorFrom(string) {
  try {
    const index = string
      .toString()
      .split('')
      .map(char => char.charCodeAt())
      .reduce((sum, num) => sum + num, 0);

    const colorIndex = index % colors.length;

    return colors[colorIndex][500];
  } catch (e) {
    console.error(e);
    return blueGray[500];
  }
}
