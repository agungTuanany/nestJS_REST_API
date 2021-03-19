import { Injectable, HttpException } from '@nestjs/common';
import { CARS } from './car.mock';

@Injectable()
export class CarService {
    private cars = CARS;

    public getCars() {
        return this.cars;
    }

    public postCar(car) {
        return this.cars.push(car);
    }

    public getCarById(id: number): Promise<any> {
        const carId = Number(id);

        return new Promise((resolve) => {
            const car = this.cars.find((car) => car.id === carId);

            // define error handling
            if (car) {
                throw new HttpException('Not Found', 404);
            }

            return resolve(car);
        });
    }

    public deleteCarById(id: number): Promise<any> {
        const carId = Number(id);

        return new Promise((resolve) => {
            const index = this.cars.findIndex((car) => car.id === carId);

            // define error handling
            if (index === -1) {
                throw new HttpException('Not Found', 404);
            }

            this.cars.splice(index, 1);
            return resolve(this.cars);
        });
    }

    public putCarById(id: number, propertyName: string, propertyValue: string) {
        const carId = Number(id);

        return new Promise((resolve) => {
            const index = this.cars.findIndex((car) => car.id === carId);

            // define error handling
            if (index === -1) {
                throw new HttpException('Not Found', 404);
            }

            this.cars[index][propertyName] = propertyValue;
            return resolve(this.cars[index]);
        });
    }
}
