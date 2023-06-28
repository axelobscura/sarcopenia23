import React from 'react';
import Router from 'next/router';
import App from 'next/app';
import Layout from './components/Layout';
import { UserProvider } from '../UserContext';
import "react-multi-carousel/lib/styles.css";

export default class MyApp extends App {
    state = {
        usuario: null,
        nombre: null
    };
    componentDidMount = () => {
        const usuario = localStorage.getItem('usuario');
        if (usuario) {
            this.setState({
                usuario
            })
        }
    };
    signIn = (usuario, password) => {
        localStorage.setItem('usuario', usuario);
        localStorage.setItem('password', password);
        this.setState(
            {
                usuario: usuario,
                password: password
            },
            () => {
                Router.push('/administrador');
            }
        );
    };
    signOut = () => {
        localStorage.removeItem('usuario');
        localStorage.removeItem('password');
        this.setState({
            usuario: null
        });
        Router.push('/');
    };
    render() {
        const { Component, pageProps } = this.props;
        return (
            <UserProvider value={{ usuario: this.state.usuario, signIn: this.signIn, signOut: this.signOut }}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </UserProvider>
        )
    }
}
