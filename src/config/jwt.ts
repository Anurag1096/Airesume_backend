
export const jwtConfig={
    secret:process.env.JWT_SECRET,
    accessTokenExpiry:"15m",
    refreshTokenExpiry:"7d",
}