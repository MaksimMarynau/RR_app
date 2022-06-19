import React, { useContext, useState, useRef } from 'react';
import { Recipe, Button, Aside } from '../components';
import './Generator.scss';
import { UserContext } from '../UserContext';

function Generator({ logIn, logOut, setInput, meals }) {
  const { login } = useContext(UserContext);
  const recipeRef = useRef(null);

  const scrollTop = () => window.scroll(0,0);

  const scrollToDiv = (ref) => window.scrollTo(0, ref.current.offsetTop);

  return (
    <>
      <section className="wrapper">
        <header>
          {login ? (
            <p className="user__title">User: {login}</p>
          ) : (
            <input
              onChange={(event) => setInput(event.target.value)}
              className="login__input"
              type="text"
              placeholder="example@mail.com "
            />
          )}
          {login ? (
            <Button onClick={logOut} className={'btn__log'} name={'Log out'} />
          ) : (
            <Button onClick={logIn} className={'btn__log'} name={'Log in'} />
          )}
        </header>
        <main>
          <Aside meals={meals} />
          {login ? (
            <div className="generate__btns">
              <Button className={'btn__generate'} name={'Generate from your recepies'} />
              <Button className={'btn__generate'} name={'Generate recipe from DB'} />
            </div>
          ) : (
            <Button
              onClick={() => scrollToDiv(recipeRef)}
              className={'btn__generate'}
              name={'Generate from DB'}
            />
          )}
        </main>
      </section>

      {login || <Recipe scrollTop={scrollTop} recipeRef={recipeRef} />}
    </>
  );
}

export default Generator;