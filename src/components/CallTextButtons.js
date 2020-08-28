import React, { useState } from "react"
import styled from "styled-components"
import Button from "./Button"
import { useTransition, animated } from "react-spring"
import { Phone, X, PhoneOutgoing, Smartphone } from "react-feather"

const CallTextButtons = ({ className, setMenuOpen }) => {
  const [show, setShow] = useState(false)
  // const switchIcons = useTransition(show, null, {
  //   from: { position: "absolute", opacity: 0 },
  //   enter: { opacity: 1 },
  //   leave: { opacity: 0 },
  // })

  const showMenu = useTransition(show, show => show, {
    enter: item => async next => {
      await next({ display: "flex" })
      await next({ height: `104px` })
    },
    leave: item => async next => {
      await next({ height: "0px" })
      await next({ display: "none" })
    },
    from: { height: "0px", display: "none", overflow: "hidden" },
    config: { mass: 3, tension: 80, friction: 10, clamp: true },
  })
  // const showMenu = useTransition(show, null, {
  //   from: { position: "absolute", opacity: 0 },
  //   enter: { opacity: 1 },
  //   leave: { opacity: 0 },
  // })

  const handleClick = () => {
    setTimeout(() => {
      setShow(false)
    }, 500)
    if (setMenuOpen) {
      setMenuOpen(false)
    }
  }

  // return transitions.map(
  //   ({ item, key, props }) =>
  //     item && (
  //       <animated.div key={ key } style={ props }>
  //         ✌️
  //       </animated.div>
  //     )
  // )

  return (
    <div className={className}>
      <Button solid onClick={() => setShow(!show)}>
        {/* <div>
          {switchIcons.map(({ item, key, props }) =>
            item ? (
              <animated.span style={props} key={key}>
                <X size={20} />
              </animated.span>
            ) : (
              <animated.span style={props} key={key}>
                <Phone size={20} />
              </animated.span>
            )
          )}
        </div> */}
        {show ? <X size={20} /> : <Phone size={20} />}
      </Button>

      {showMenu.map(
        ({ item, key, props }) =>
          item && (
            <AnimatedMenu key={key} style={props}>
              <StyledButton
                as="a"
                href="tel:6145601176"
                solid
                onClick={() => handleClick()}
              >
                <span>
                  <PhoneOutgoing />
                </span>
                {`Give Us A Call`}
              </StyledButton>
              <StyledButton
                as="a"
                href="sms:6145601176"
                solid
                onClick={() => handleClick()}
              >
                <span>
                  <Smartphone />
                </span>
                {` Send Us A Text`}
              </StyledButton>
            </AnimatedMenu>
          )
      )}
    </div>
  )
}

export default styled(CallTextButtons)`
  position: relative;
  display: flex;
  justify-content: center;

  & > ${Button} {
    padding: 0.5rem 0.7rem;
    display: flex;
    align-items: center;

    & svg {
      height: 26px;
      width: 26px;

      @media (min-width: 662px) {
        height: 20px;
        width: 20px;
      }
    }
    /* & div {
      height: 25px;
      width: 20px;
      position: absolute
    } */
  }
`
const AnimatedMenu = styled(animated.div)`
  position: absolute;
  background: var(--primary);
  top: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  @media (min-width: 662px) {
    right: 0;
    align-items: flex-end;
  }
`

const StyledButton = styled(Button)`
  color: var(--white);
  display: flex;
  align-items: center;
  width: max-content;
  padding: 0.75rem;

  & span {
    margin-right: 1em;
    display: flex;
    align-items: center;
  }

  @media (min-width: 662px) {
    padding: 0.75rem;
    width: max-content;
  }
`
