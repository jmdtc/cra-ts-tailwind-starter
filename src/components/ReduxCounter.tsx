import React from "react"
import { useSelector, useDispatch } from 'react-redux'
import { setCounter, selectCounter, CounterActions } from "../slices/counter"

export const ReduxCounter: React.FC = () => {
    const dispatch = useDispatch()
    const counter: number = useSelector(selectCounter)

    return (
        <div className="flex flex-col items-center w-14">
            <div className="flex flex-row justify-center h-8 w-full border border-gray-400">
                <span className="leading-loose align-bottom">
                    {counter}
                </span>
            </div>
            <div className="flex flex-row justify-between w-full">
                <button
                    onClick={() => dispatch(setCounter(CounterActions.DECREMENT))}
                    className="w-1/2 border border-gray-400"
                >-</button>
                <button
                    onClick={() => dispatch(setCounter(CounterActions.INCREMENT))}
                    className="w-1/2 border border-gray-400"
                >+</button>
            </div>
        </div>
    )
}