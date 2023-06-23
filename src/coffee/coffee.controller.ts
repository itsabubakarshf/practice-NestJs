import { Controller, Get, Param } from '@nestjs/common';

@Controller('coffee')
export class CoffeeController {
    @Get()
    findAll(){
        return "This action returns all coffees"
    }
    @Get(':id')
    findOne(@Param() params){
        return `This action returns #${params.id} coffee`
    }
}
