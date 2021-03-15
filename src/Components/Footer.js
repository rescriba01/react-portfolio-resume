import React, {Component} from 'react';

class Footer extends Component {

    render() {

        if (this.props.data) {
            var networks = this.props.data.social.map(function (network) {
                return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
            })
        }

        return (
            <footer>

                <div className="row">
                    <div className="twelve columns">

                        <ul className="copyright">
                            {/*todo: Figure out how to dynamically populate copyrightText with year using function*/}
                            <li>&copy; Copyright <span className="copyrightText">20xx</span> Escribano</li>
                            <li>Design by <a title="Me" href="#">Ship of Theseus</a></li>
                        </ul>

                    </div>
                    <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i
                        className="icon-up-open"></i></a></div>
                </div>
            </footer>
        );
    }
}

export default Footer;
