@Get('/health')
healthCheck() {
  return { status: 'ok' };
}