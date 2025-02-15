import React from 'react'
import styled from 'styled-components';
import style from './ResumeBtn.module.css'
export default function ResumeBtn() {
  return (
    <>
      <StyledWrapper>

        <a href="https://drive.google.com/drive/folders/14BoqjB2tVFL-DQYNSntGOgwksEDL7DwB" target="_blank" rel="noopener noreferrer" className="button my-4">
          Open My Resume
        </a>

      </StyledWrapper>
    </>
  )
}


const StyledWrapper = styled.div`
  .button {
    position: relative;
    transition: all 0.3s ease-in-out;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
    padding-block: 0.5rem;
    padding-inline: 1.25rem;
    background-color: rgb(0 107 179);
    border-radius: 9999px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: #ffff;
    gap: 10px;
    font-weight: bold;
    border: 3px solid #ffffff4d;
    outline: none;
    overflow: hidden;
    font-size: 15px;
  }



  .button:hover {
    transform: scale(1.05);
    border-color: #fff9;
  }



  .button:hover::before {
    animation: shine 1.5s ease-out infinite;
  }

  .button::before {
    content: "";
    position: absolute;
    width: 100px;
    height: 100%;
    background-image: linear-gradient(
      120deg,
      rgba(255, 255, 255, 0) 30%,
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0) 70%
    );
    top: 0;
    left: -100px;
    opacity: 0.6;
  }

  @keyframes shine {
    0% {
      left: -100px;
    }

    60% {
      left: 100%;
    }

    to {
      left: 100%;
    }
  }`;



