import { Controller, Get, Param, Post,Body, HttpCode, HttpStatus, Patch, Delete, Query } from '@nestjs/common';

@Controller('coffee')
export class CoffeeController {
    @Get(':id')
    //Both approaches are valid

    // findOne(@Param() params){
    //     return `This action returns #${params.id} coffee`
    // }
    findOne(@Param('id') id: string){
        return `This action returns #${id} coffee`
    }
    
    //add coffee
    @Post()
    @HttpCode(HttpStatus.BAD_GATEWAY)
    addCoffee(@Body() body:object){
        return body
    }
    
    //update coffee
    @Patch(':id')
    updateCoffee(@Param('id') id: string, @Body() body:object){
        return 'This action updates a coffee with id #' + id + ' and body ' + JSON.stringify(body)
    }

    //delete coffee
    @Delete(':id')
    deleteCoffee(@Param('id') id: string, @Body() body:object){
        return 'This action delete a coffee with id #' + id + ' and body ' + JSON.stringify(body)
    }

    //use of Query:paginationQuery
    @Get()
    findAll(@Query() paginationQuery){
        const {limit, offset}=paginationQuery;
        return `The limit is ${limit} and offet is ${offset}`
    }
}
