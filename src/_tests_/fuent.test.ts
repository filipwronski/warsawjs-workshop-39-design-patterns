// fluent api

enum Command {
    Read,
    Write,

}

class FrameBuilder {
    private frame: number[] = []
    public startFrame(): FrameBuilder {
        this.frame = [];
        this.frame.push(0xAB);

        return this;
    }
    public addCommand(command: Command): FrameBuilder {
        switch(command) {
            case Command.Read:
                this.frame.push(0x01)
        }

        return this;
    }

    public xor(): FrameBuilder {
        this.frame.push(0xF2);

        return this;
    }

    public build(): number[] {
        return this.frame
    }
}
test('fluent builder', () => {
    const builder = new FrameBuilder();

    builder
        .startFrame()
        .addCommand(Command.Read)
        .xor()

        const frame = builder.build();

        expect(frame).toEqual([0xAB, 0x01, 0xF2]);

})