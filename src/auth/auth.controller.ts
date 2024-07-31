import { Body, Controller, Post, Req, HttpCode, HttpStatus } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";
import { request } from "http";


@Controller("auth")
export class AuthController {
   
    constructor(private authService: AuthService) {}

    @HttpCode(HttpStatus.OK)
    @Post("signup")
    signup(@Body() dto: AuthDto) {
       
        return this.authService.signup(dto);
    }

    // @Post("signup")
    // signup(@Req() req: Request) {
    //     console.log(req.body);
    //     return this.authService.signup();
    // }

    @HttpCode(HttpStatus.OK)
    @Post("signin")
    signin(@Body() dto: AuthDto) {
        return this.authService.signin(dto);
    }
}