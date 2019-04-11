import Highway from '@dogstudio/highway';
import Fade from './transistion';

const H = new Highway.Core({
    transitions:{
        default:Fade
    }
});