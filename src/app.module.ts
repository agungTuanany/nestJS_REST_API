/* NOTE:
 * module.ts is contain the implementation of your application with root module
 */
import { Module } from '@nestjs/common';
import { CarModule } from './car/car.module';

@Module({
    imports: [CarModule],
})
export class AppModule {}
