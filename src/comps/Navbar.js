import { Component } from 'react';
import { Link } from 'react-scroll';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            top: true,
            hamburger: false
        };
    }

    componentDidMount() {
        document.addEventListener('scroll', () => {
            const top = window.scrollY < 300;
            if (top !== this.state.top) {
                this.setState({top})
            }
        });
    }

    render() {
        return (
            <nav className={this.state.top ? 'navTop' : 'navBottom'}>
                <div className="navHeaderWrapper">
                    <span className={this.state.top ? 'navHeaderTop' : 'navHeaderBottom'}>
                        Cool Stuff
                    </span>
                </div>
                <div className="navLinks">
                    <Link to='particles' smooth offset={-1000}>
                        <span className='navLink'>
                            Particles
                        </span>
                    </Link>
                    <Link to='sliders' smooth offset={-70}>
                        <span className='navLink'>
                            Sliders
                        </span>
                    </Link>
                    <Link to='space' smooth offset={-70}>
                        <span className='navLink'>
                            Space
                        </span>
                    </Link>
                </div>
            </nav>
        )
    }
}

export default Navbar;