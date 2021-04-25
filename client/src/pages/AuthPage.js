import React, {useState} from 'react'
import {useHttp} from '../hooks/http.hook'

export const AuthPage = () => {
    const {loading, request} = useHttp()
    const [form, setForm] = useState({
        email: '', password: ''
    })

    const onChange = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const onRegister = async () => {
        debugger
        try {
            const data = await request('api/auth/register', 'POST', {...form})
            console.log('Data', data)
        } catch (e) {}
    }

    return (
        <div className="row">
            <div className="col s6 offset-s3">
                <h1>Сократи ссылку</h1>
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">Авторизация</span>
                        <div className="">
                            <div className="input-field">
                                <input
                                    placeholder="Введите email"
                                    id="email"
                                    type="text"
                                    name="email"
                                    onChange={onChange}
                                />
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className="input-field">
                                <input
                                    placeholder="Введите пароль"
                                    id="password"
                                    type="password"
                                    name="password"
                                    onChange={onChange}
                                />
                                <label htmlFor="password">Пароль</label>
                            </div>
                        </div>
                    </div>
                    <div className="card-action">
                        <button
                            className="btn yellow darken-4"
                            style={{marginRight: 20}}
                            disabled={loading}
                        >
                            Войти
                        </button>
                        <button
                            className="btn grey lighten-1 black-text"
                            onClick={onRegister}
                            disabled={loading}
                        >
                            Регитсрация
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}