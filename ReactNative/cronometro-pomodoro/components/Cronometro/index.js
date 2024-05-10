import { View, Text } from "react-native"
import CronometroStyle from './styles';
import { useContext, useEffect, useState } from "react";
import defaultTime from "./constants";
import GlobalContext from "../globals/GlobalContext";
import { vibrate } from "../../utils";

const minToSec = min => min * 60
const paddZero = num => num < 10 ? `0${num}` : num
let interval = 0
export default () => {
  // const contador

  const { DEFAULT_WORK_TIME, DEFAULT_BREAK_TIME } = defaultTime

  const { isRunning, isWorking, setIsWorking, shouldReset } = useContext(GlobalContext)

  const [remainingTime, setRemainingTime] = useState(minToSec(DEFAULT_WORK_TIME))

  useEffect(() => {

    if (remainingTime === 0){
      vibrate()
      setRemainingTime(isWorking ? minToSec(DEFAULT_BREAK_TIME) : minToSec(DEFAULT_WORK_TIME))

      setIsWorking(prev => !prev)
    }

  }, [remainingTime])

  useEffect(() => {
    if (isRunning){
      interval = setInterval(() => {
        setRemainingTime(prev => prev - 1)
      }, 1000);
      
    }else{
      // Hay que detener el intervalo
      clearInterval(interval)
    }
  }, [isRunning])  

  useEffect(() => {
    if(shouldReset){
      setRemainingTime((isWorking ? minToSec(DEFAULT_WORK_TIME) : minToSec(DEFAULT_BREAK_TIME)))
    }
  }, [shouldReset])



  const mins = Math.floor(remainingTime / 60)
  const secs = Math.floor(remainingTime % 60)

  return (
    <View>
      <Text style={CronometroStyle.text}>{paddZero(mins)}:{paddZero(secs)}</Text>
    </View>
  )
}