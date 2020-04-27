import React, { Component } from 'react';
import './Home.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import userApi from '../../api/userApi';
import { setUserToken, isLogin } from '../../auth/userAuth';
import { Redirect } from 'react-router-dom';

class Home extends Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: '',
            error: '',
            isLogining: false
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    login = (e) => {
        e.preventDefault();
        this.setState({isLogining: true});
        const {email, password} = this.state;
        if(!password) this.setState({error: '* password is required!'});
        if(!email) this.setState({error: '* email is required!'});
        if(password && email) {
            userApi.login(JSON.stringify({
                email: email,
                password: password
            })).then(res => {
                if(res.data.cookies){
                    setUserToken(res.data.cookies);
                    const {history, location} = this.props;
                    var from = {pathname: '/courses/parts-and-fractions'};
                    if(location.state){
                        from = location.state.from;
                    }
                    sessionStorage.setItem("user", JSON.stringify({
                        email: email,
                        name: res.data.user[0].name,
                        id: res.data.user[0].id
                    }))
                    history.replace(from);
                    return;
                } else {
                    this.setState({error: 'Email or password is not correct!', isLogining: false});
                }
            })
        }
        else this.setState({isLogining: false});
    }

    render() {
        if(isLogin()) return <Redirect to="/courses/parts-and-fractions" />
        return (
            <div className="home">
                <div className="home__header">

                </div>
                <div className="container login-container">
                    <div className="row home__login">
                        <div className="col-md-6 introduce">
                            <h1>Drangonlearn.io</h1>
                            <p>Dragonlearn.in — is an online platform, where children from all over India learn Mathematics interactively.</p>
                            <a href="/register">
                                <button className="btn btn-primary register">Register</button>
                            </a>
                        </div>
                        <div className="col-md-6">
                            <div className="login">
                                <h2>Drangonlearn.io</h2>
                                <form>
                                <div className="form-group">
                                        <input type="email" name="email" className="form-control" id="exampleInputEmail" placeholder="Email" onChange={this.onChange} value={this.state.email} />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={this.onChange} value={this.state.password} />
                                    </div>
                                    <p className="text-center"> {this.state.error} </p>
                                    <p className="text-center">{this.state.isLogining && (
                                        <div class="spinner-border text-light text-center" role="status">
                                            <span class="sr-only">Loading...</span>
                                        </div>
                                    )}</p>
                                    <button className="btn btn-success btn-block" onClick={this.login}>Login</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="howtostart text-center">
                        <h2>How to start using DRAGONLEARN.IO</h2>
                        <iframe width="765" height="504" src="https://www.youtube.com/embed/VurkiXLG-WE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="container example-tasks">
                        <h2>Example tasks</h2>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="task-introduce d-flex mb-4">
                                    <img src="https://dragonlearn.in/assets/matwey/icon2-77d9245a39b6688ff0b6134adb5cdc32.png" alt=""/>
                                    <p>The platform currently contains more than two thousand interactive exercises, laid out in a bright, game format.</p>
                                </div>
                                <div className="task-introduce d-flex">
                                    <img src="https://dragonlearn.in/assets/matwey/icon1-47a325cae22a7e7bff151bbf4d62244c.png" alt=""/>
                                    <p>Each of them is the result of the teamwork of a large team of professionals: psychologists and methodologists, illustrators and designers, developers and analysts.</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="tasks">
                                    <h3>See example tasks</h3>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <a href="/game1">
                                                <div className="task-thumnail" style={{backgroundImage: 'url(https://dragonlearn.in/assets/matwey/india/sample_1-a65fc644cb8de77bf3985a6c4d9704bf.png)', width: '100%', height: '100px'}}>
                                                    <FontAwesomeIcon className="icon" icon={faPlay} />
                                                </div>
                                            </a>
                                            <p className="task-description text-center">
                                                Who has more block
                                            </p>
                                        </div>

                                        <div className="col-md-6">
                                            <a href="/game1">
                                                <div className="task-thumnail" style={{backgroundImage: 'url(https://dragonlearn.in/assets/matwey/india/sample_2-0568c53a3e0f8f0c206d3057283f574f.png)', width: '100%', height: '100px'}}>
                                                    <FontAwesomeIcon className="icon" icon={faPlay} />
                                                </div>
                                            </a>
                                            <p className="task-description text-center">
                                                Fill in the number
                                            </p>
                                        </div>

                                        <div className="col-md-6">
                                            <a href="/game1">
                                                <div className="task-thumnail" style={{backgroundImage: 'url(https://dragonlearn.in/assets/matwey/india/sample_3-8f2718fcc4d91344d22cfd6d5dd8099e.png)', width: '100%', height: '100px'}}>
                                                    <FontAwesomeIcon className="icon" icon={faPlay} />
                                                </div>
                                            </a>
                                            <p className="task-description text-center">
                                                Perimeters  
                                            </p>
                                        </div>

                                        <div className="col-md-6">
                                            <a href="/game1">
                                                <div className="task-thumnail" style={{backgroundImage: 'url(https://dragonlearn.in/assets/matwey/india/sample_4-81a0347f758ebf2c7c6664bab8fc1dad.png)', width: '100%', height: '100px'}}>
                                                    <FontAwesomeIcon className="icon" icon={faPlay} />
                                                </div>
                                            </a>
                                            <p className="task-description text-center">
                                                Parts
                                            </p>
                                        </div>
                                    </div>
                                        
                                </div>
                            </div>
                        </div>

                        <div className="d-flex justify-content-center p-5">
                            <a href="/register">
                                <button className="btn btn-primary register">Register</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="container pt-5">
                    <div className="description">
                        <div className="row mb-3">
                            <div className="col-md-8">
                                <div className="text">
                                    <h2>Learning process</h2>
                                    <p>The learning is based on completing interactive exercises that correspond to the school curriculum and are aimed at getting conceptual understanding rather than factual memorization. The tasks simulate situations from real life, which every child is familiar with. Dragonlearn.in builds a dialogue with the students. The system reacts to the learner’s actions. If the learner answers correctly, the system praises them and suggests new tasks. If they make a mistake, the system asks clarifying questions and help the learner come to the right decision themselves.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <img src="https://dragonlearn.in/assets/matwey/india/dino-0cd466ff32f9897b40d94c215b84b655.svg" alt=""/>
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col-md-4">
                                <img src="https://dragonlearn.in/assets/matwey/graph-d5954b4914e5f7b1a055616e06a78592.svg" alt=""/>
                            </div>
                            <div className="col-md-8">
                                <div className="text">
                                    <h2>Individual approach</h2>
                                    <p>Dragonlearn.in tracks actions of each student: it takes into account how long they require to complete tasks, how many tasks they solved correctly, the number of mistakes they make, and general behaviour of the student. Based on this information it automatically selects personalised tasks and puts them in order, thereby creating an individual learning path for every student.
Dragonlearn.in adapts to those who need more time by giving additional explanations, a greater number of exercises and a guided work on mistakes.</p>
                                </div>
                            </div>
                            
                        </div>

                        <div className="row mb-3">
                            <div className="col-md-8">
                                <div className="text">
                                    <h2>Subjects</h2>
                                    <p>Mathematics courses for the preprimary and primary school have now been added to the Dragonlearn.in platform.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <img src="https://dragonlearn.in/assets/matwey/india/happy-dc3590de39e49b60a00bd31e35049743.svg" alt=""/>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center p-5">
                            <a href="/register">
                                <button className="btn btn-primary register">Register</button>
                            </a>
                        </div>
                    </div>
                </div>

                
                    <div className="teacher-introduce pt-5">
                        <div className="container">
                            <h2 className="text-center">Dragonlearn.in — teacher's reliable assistant</h2>

                            <div className="row">
                                <div className="col-md-4 d-flex justify-content-center align-items-center flex-column p-5">
                                    <img src="https://dragonlearn.in/assets/matwey/help_1-406f007f3b006663418362e0a9e69616.svg" alt=""/>
                                    <h3 className="text-center pt-3">Diagnostics and monitoring</h3>
                                    <p>The teacher receives detailed statistics about each student’s performance. At any time you can find out how many exercises a student has completed, how much time was spent on finishing them, and which exercises and topics caused the most difficulty.</p>
                                </div>

                                <div className="col-md-4 d-flex justify-content-center align-items-center flex-column p-5">
                                    <img src="https://dragonlearn.in/assets/matwey/help_2-01d683946b4fd45c5ec8eb8aef45a7d5.svg" alt=""/>
                                    <h3 className="text-center pt-3">Teaching in a game format</h3>
                                    <p>Dragonlearn.in — is a great way to make your lessons even more exciting, using tablets, computers or interactive boards in class.</p>
                                </div>

                                <div className="col-md-4 d-flex justify-content-center align-items-center flex-column p-5">
                                    <img src="https://dragonlearn.in/assets/matwey/help_3-3b5c9e5848a675eb8f06918a26076166.svg" alt=""/>
                                    <h3 className="text-center pt-3">Individualised teaching</h3>
                                    <p>Dragonlearn.in personalises teaching and helps teachers to construct individual programmes for each student.</p>
                                </div>
                            </div>

                            <div className="d-flex justify-content-center p-5">
                            <a href="/register">
                                <button className="btn btn-primary register">Register</button>
                            </a>
                        </div>
                        </div>
                    </div>
            </div>
        );
    }
}

export default Home;