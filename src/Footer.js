import React from "react";

class Footer extends React.Component {
    render() {
        return (
            <div className="Footer">
                <div className="info">
                    <div className="about">
                        <h3>About</h3>
                        <p>
                            Amid the worsened situation of COVID-19, this is a small attempt to gather all the necessary information and increase awareness amongst the general public, about the necessary precautions that must be taken to avoid further spread of the virus.
                        </p>
                    </div>
                    <div className="contact">
                        <h3>Contact Info</h3>
                        <span className="icons"><a href="https://www.instagram.com/abhisheklmnopq/"><i class="fa-brands fa-instagram"></i></a>
                            <a href="https://github.com/abhiseksr"><i class="fa-brands fa-github"></i></a>
                            <a href="https://medium.com/@abhishekjr"><i class="fa-brands fa-medium"></i></a>
                        </span>
                        <span className="copyright">
                            <p>&copy;PANDAWORKS<i class="fa-solid fa-heart"></i></p>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;