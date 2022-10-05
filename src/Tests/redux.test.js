import { addNewAirlines, deleteAirline, fetchAirlines } from '../redux/airlines/airlines';
import { addNewReservations, fetchReservations } from '../redux/reservations/reservations';
import { fetchCurrentUser, fetchNewUser } from '../redux/users/registerSlice'
import currentUser from './__Mocks__/currentUser';
import newAirline from './__Mocks__/newAirline';
import newReservation from './__Mocks__/newReservations';
import newUser from './__Mocks__/newUser';

describe('User slices', () => {
    test('Dispatch fetchNewUser action', () => {
        const dispach = jest.fn;
        dispach(fetchNewUser(newUser))
    })

    test('Dispatch fetchCurrentUser action', () => {
        const dispach = jest.fn;
        dispach(fetchCurrentUser(currentUser))
    })
})

describe('Airline slices', () => {
    test('Dispatch fetchAirlines action', () => {
        const dispach = jest.fn;
        dispach(fetchAirlines())
    })

    test('Dispatch addNewAirlines action', () => {
        const dispach = jest.fn;
        dispach(addNewAirlines(newAirline))
    })

    test('Dispatch deleteAirline action', () => {
        const dispach = jest.fn;
        const id = 2;
        dispach(deleteAirline(id))
    })
})

describe('Reservations slices', () => {
    test('Dispatch fetchReservations action', () => {
        const dispach = jest.fn;
        dispach(fetchReservations())
    })

    test('Dispatch addNewReservations action', () => {
        const dispach = jest.fn;
        dispach(addNewReservations(newReservation))
    })
})
