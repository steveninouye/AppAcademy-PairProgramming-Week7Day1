class Api::TodosController < ApplicationController
  def index
    @todos = Todo.includes(:steps).all
    # for each todo the key of steps:=== all the steps
    todos = @todos.as_json
    arr = []
    todos.map.with_index do |todo, idx|
      todo[:steps] = @todos[idx].steps
      arr << todo
    end
    render json: arr
  end

  def create
    @todo = Todo.new(todo_params)
    if @todo.save
      render json: @todo
    else
      render json: @todo.errors.full_messages, status: 422
    end
  end

  def show
    render json: Todo.find(params[:id])
  end

  def update
    @todo = Todo.find(params[:id])
    if @todo.update(todo_params)
      render json: @todo
    else
      render json: @todo.errors.full_messages, status: 422
    end
  end

  def destroy
    @todo = Todo.find(params[:id])
    print "this is the deleted todo => "
    puts @todo
    @todo.destroy
    if @todo
      render json: @todo
    else
      render json: @todo.errors.full_messages, status: 422
    end
  end

  private

  def todo_params
    params.require(:todo).permit(:title, :body, :done)
  end
end
